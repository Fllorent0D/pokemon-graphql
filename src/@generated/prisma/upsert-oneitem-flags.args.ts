import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsWhereUniqueInput } from '../item-flags/item-flags-where-unique.input';
import { Type } from 'class-transformer';
import { item_flagsCreateInput } from '../item-flags/item-flags-create.input';
import { item_flagsUpdateInput } from '../item-flags/item-flags-update.input';

@ArgsType()
export class UpsertOneitemFlagsArgs {

    @Field(() => item_flagsWhereUniqueInput, {nullable:false})
    @Type(() => item_flagsWhereUniqueInput)
    where!: item_flagsWhereUniqueInput;

    @Field(() => item_flagsCreateInput, {nullable:false})
    @Type(() => item_flagsCreateInput)
    create!: item_flagsCreateInput;

    @Field(() => item_flagsUpdateInput, {nullable:false})
    @Type(() => item_flagsUpdateInput)
    update!: item_flagsUpdateInput;
}
