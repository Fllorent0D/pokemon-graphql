import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flagsWhereUniqueInput } from '../item-flags/item-flags-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlagsArgs {

    @Field(() => item_flagsWhereUniqueInput, {nullable:false})
    @Type(() => item_flagsWhereUniqueInput)
    where!: item_flagsWhereUniqueInput;
}
