import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsScalarWhereInput } from './pokemon-items-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_itemsUpdateManyMutationInput } from './pokemon-items-update-many-mutation.input';

@InputType()
export class pokemon_itemsUpdateManyWithWhereWithoutItemsInput {

    @Field(() => pokemon_itemsScalarWhereInput, {nullable:false})
    @Type(() => pokemon_itemsScalarWhereInput)
    where!: pokemon_itemsScalarWhereInput;

    @Field(() => pokemon_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateManyMutationInput)
    data!: pokemon_itemsUpdateManyMutationInput;
}
