import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseWhereInput } from '../move-flag-prose/move-flag-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveFlagProseArgs {

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    @Type(() => move_flag_proseWhereInput)
    where?: move_flag_proseWhereInput;
}
