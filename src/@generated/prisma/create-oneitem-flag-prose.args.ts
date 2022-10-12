import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseCreateInput } from '../item-flag-prose/item-flag-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlagProseArgs {

    @Field(() => item_flag_proseCreateInput, {nullable:false})
    @Type(() => item_flag_proseCreateInput)
    data!: item_flag_proseCreateInput;
}
