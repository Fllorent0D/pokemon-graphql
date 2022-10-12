import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { itemsUpdateManyMutationInput } from './items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { itemsWhereInput } from './items-where.input';

@ArgsType()
export class UpdateManyitemsArgs {

    @Field(() => itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => itemsUpdateManyMutationInput)
    data!: itemsUpdateManyMutationInput;

    @Field(() => itemsWhereInput, {nullable:true})
    @Type(() => itemsWhereInput)
    where?: itemsWhereInput;
}
