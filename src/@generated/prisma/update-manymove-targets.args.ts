import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsUpdateManyMutationInput } from '../move-targets/move-targets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_targetsWhereInput } from '../move-targets/move-targets-where.input';

@ArgsType()
export class UpdateManymoveTargetsArgs {

    @Field(() => move_targetsUpdateManyMutationInput, {nullable:false})
    @Type(() => move_targetsUpdateManyMutationInput)
    data!: move_targetsUpdateManyMutationInput;

    @Field(() => move_targetsWhereInput, {nullable:true})
    @Type(() => move_targetsWhereInput)
    where?: move_targetsWhereInput;
}
