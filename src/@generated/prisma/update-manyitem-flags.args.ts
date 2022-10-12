import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsUpdateManyMutationInput } from '../item-flags/item-flags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_flagsWhereInput } from '../item-flags/item-flags-where.input';

@ArgsType()
export class UpdateManyitemFlagsArgs {

    @Field(() => item_flagsUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flagsUpdateManyMutationInput)
    data!: item_flagsUpdateManyMutationInput;

    @Field(() => item_flagsWhereInput, {nullable:true})
    @Type(() => item_flagsWhereInput)
    where?: item_flagsWhereInput;
}
