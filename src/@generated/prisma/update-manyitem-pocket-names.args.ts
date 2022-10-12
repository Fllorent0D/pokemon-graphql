import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesUpdateManyMutationInput } from '../item-pocket-names/item-pocket-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_pocket_namesWhereInput } from '../item-pocket-names/item-pocket-names-where.input';

@ArgsType()
export class UpdateManyitemPocketNamesArgs {

    @Field(() => item_pocket_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateManyMutationInput)
    data!: item_pocket_namesUpdateManyMutationInput;

    @Field(() => item_pocket_namesWhereInput, {nullable:true})
    @Type(() => item_pocket_namesWhereInput)
    where?: item_pocket_namesWhereInput;
}
