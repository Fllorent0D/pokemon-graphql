import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsUpdateInput } from '../item-flags/item-flags-update.input';
import { Type } from 'class-transformer';
import { item_flagsWhereUniqueInput } from '../item-flags/item-flags-where-unique.input';

@ArgsType()
export class UpdateOneitemFlagsArgs {

    @Field(() => item_flagsUpdateInput, {nullable:false})
    @Type(() => item_flagsUpdateInput)
    data!: item_flagsUpdateInput;

    @Field(() => item_flagsWhereUniqueInput, {nullable:false})
    @Type(() => item_flagsWhereUniqueInput)
    where!: item_flagsWhereUniqueInput;
}
