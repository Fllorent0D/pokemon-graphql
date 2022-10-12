import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textScalarWhereInput } from './item-flavor-text-scalar-where.input';
import { Type } from 'class-transformer';
import { item_flavor_textUpdateManyMutationInput } from './item-flavor-text-update-many-mutation.input';

@InputType()
export class item_flavor_textUpdateManyWithWhereWithoutItemsInput {

    @Field(() => item_flavor_textScalarWhereInput, {nullable:false})
    @Type(() => item_flavor_textScalarWhereInput)
    where!: item_flavor_textScalarWhereInput;

    @Field(() => item_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flavor_textUpdateManyMutationInput)
    data!: item_flavor_textUpdateManyMutationInput;
}
