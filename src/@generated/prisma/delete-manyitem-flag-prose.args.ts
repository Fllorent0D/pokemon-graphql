import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseWhereInput } from '../item-flag-prose/item-flag-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlagProseArgs {

    @Field(() => item_flag_proseWhereInput, {nullable:true})
    @Type(() => item_flag_proseWhereInput)
    where?: item_flag_proseWhereInput;
}
