import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsUpdateInput } from '../move-targets/move-targets-update.input';
import { Type } from 'class-transformer';
import { move_targetsWhereUniqueInput } from '../move-targets/move-targets-where-unique.input';

@ArgsType()
export class UpdateOnemoveTargetsArgs {

    @Field(() => move_targetsUpdateInput, {nullable:false})
    @Type(() => move_targetsUpdateInput)
    data!: move_targetsUpdateInput;

    @Field(() => move_targetsWhereUniqueInput, {nullable:false})
    @Type(() => move_targetsWhereUniqueInput)
    where!: move_targetsWhereUniqueInput;
}
