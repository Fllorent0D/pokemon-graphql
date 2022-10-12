import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseUpdateManyMutationInput } from '../move-flag-prose/move-flag-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_flag_proseWhereInput } from '../move-flag-prose/move-flag-prose-where.input';

@ArgsType()
export class UpdateManymoveFlagProseArgs {

    @Field(() => move_flag_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flag_proseUpdateManyMutationInput)
    data!: move_flag_proseUpdateManyMutationInput;

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    @Type(() => move_flag_proseWhereInput)
    where?: move_flag_proseWhereInput;
}
