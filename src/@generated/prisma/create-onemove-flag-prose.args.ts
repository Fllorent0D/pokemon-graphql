import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseCreateInput } from '../move-flag-prose/move-flag-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveFlagProseArgs {

    @Field(() => move_flag_proseCreateInput, {nullable:false})
    @Type(() => move_flag_proseCreateInput)
    data!: move_flag_proseCreateInput;
}
