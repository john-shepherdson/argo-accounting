package org.accounting.system.repositories.modulators;

import org.accounting.system.entities.Entity;
import org.accounting.system.entities.acl.AccessControl;
import org.bson.types.ObjectId;

import java.util.List;

/**
 * This {@link AccessAlwaysModulator} stipulates that all available operations in the various collections
 * will always be accessible without any restrictions. As a result, all collection entities are accessible.
 *
 * @param <E> Generic class that represents a mongo collection.
 */
public abstract class AccessAlwaysModulator<E extends Entity> extends AccessModulator<E> {


    @Override
    public E fetchEntityById(ObjectId id) {

        return findById(id);
    }

    @Override
    public boolean deleteEntityById(ObjectId id) {

        return deleteById(id);
    }

    @Override
    public E updateEntity(E entity) {

        update(entity);
        return entity;
    }

    @Override
    public List<E> getAllEntities() {

        return findAll().list();
    }

    @Override
    public void grantPermission(AccessControl accessControl) {

         getAccessControlRepository().persist(accessControl);
    }
}
