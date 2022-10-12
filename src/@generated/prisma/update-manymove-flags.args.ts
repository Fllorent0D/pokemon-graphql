import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flagsUpdateManyMutationInput } from '../move-flags/move-flags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_flagsWhereInput } from '../move-flags/move-flags-where.input';

@ArgsType()
export class UpdateManymoveFlagsArgs {

    @Field(() => move_flagsUpdateManyMutationInput, {nullable:false})
    @Type(() => move_flagsUpdateManyMutationInput)
    data!: move_flagsUpdateManyMutationInput;

    @Field(() => move_flagsWhereInput, {nullable:true})
    @Type(() => move_flagsWhereInput)
    where?: move_flagsWhereInput;
}
