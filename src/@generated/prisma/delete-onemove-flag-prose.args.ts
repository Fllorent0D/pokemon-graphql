import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseWhereUniqueInput } from '../move-flag-prose/move-flag-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveFlagProseArgs {

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_proseWhereUniqueInput)
    where!: move_flag_proseWhereUniqueInput;
}
