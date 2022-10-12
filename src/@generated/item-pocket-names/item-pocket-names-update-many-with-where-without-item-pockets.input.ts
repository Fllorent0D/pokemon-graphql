import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesScalarWhereInput } from './item-pocket-names-scalar-where.input';
import { Type } from 'class-transformer';
import { item_pocket_namesUpdateManyMutationInput } from './item-pocket-names-update-many-mutation.input';

@InputType()
export class item_pocket_namesUpdateManyWithWhereWithoutItem_pocketsInput {

    @Field(() => item_pocket_namesScalarWhereInput, {nullable:false})
    @Type(() => item_pocket_namesScalarWhereInput)
    where!: item_pocket_namesScalarWhereInput;

    @Field(() => item_pocket_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateManyMutationInput)
    data!: item_pocket_namesUpdateManyMutationInput;
}
