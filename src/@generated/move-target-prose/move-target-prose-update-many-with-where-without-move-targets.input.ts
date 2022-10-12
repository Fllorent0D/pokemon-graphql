import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseScalarWhereInput } from './move-target-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_target_proseUpdateManyMutationInput } from './move-target-prose-update-many-mutation.input';

@InputType()
export class move_target_proseUpdateManyWithWhereWithoutMove_targetsInput {

    @Field(() => move_target_proseScalarWhereInput, {nullable:false})
    @Type(() => move_target_proseScalarWhereInput)
    where!: move_target_proseScalarWhereInput;

    @Field(() => move_target_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_target_proseUpdateManyMutationInput)
    data!: move_target_proseUpdateManyMutationInput;
}
