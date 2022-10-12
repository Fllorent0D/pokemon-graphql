import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseWhereUniqueInput } from '../item-flag-prose/item-flag-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlagProseArgs {

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;
}
