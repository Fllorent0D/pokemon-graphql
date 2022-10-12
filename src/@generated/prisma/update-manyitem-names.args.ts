import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesUpdateManyMutationInput } from '../item-names/item-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_namesWhereInput } from '../item-names/item-names-where.input';

@ArgsType()
export class UpdateManyitemNamesArgs {

    @Field(() => item_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_namesUpdateManyMutationInput)
    data!: item_namesUpdateManyMutationInput;

    @Field(() => item_namesWhereInput, {nullable:true})
    @Type(() => item_namesWhereInput)
    where?: item_namesWhereInput;
}
