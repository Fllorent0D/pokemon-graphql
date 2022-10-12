import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseScalarWhereInput } from './move-flag-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_flag_proseUpdateManyMutationInput } from './move-flag-prose-update-many-mutation.input';

@InputType()
export class move_flag_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => move_flag_proseScalarWhereInput, {nullable:false})
    @Type(() => move_flag_proseScalarWhereInput)
    where!: move_flag_proseScalarWhereInput;

    @Field(() => move_flag_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flag_proseUpdateManyMutationInput)
    data!: move_flag_proseUpdateManyMutationInput;
}
