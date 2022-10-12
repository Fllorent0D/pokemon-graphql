import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseUpdateManyMutationInput } from '../move-target-prose/move-target-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_target_proseWhereInput } from '../move-target-prose/move-target-prose-where.input';

@ArgsType()
export class UpdateManymoveTargetProseArgs {

    @Field(() => move_target_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_target_proseUpdateManyMutationInput)
    data!: move_target_proseUpdateManyMutationInput;

    @Field(() => move_target_proseWhereInput, {nullable:true})
    @Type(() => move_target_proseWhereInput)
    where?: move_target_proseWhereInput;
}
