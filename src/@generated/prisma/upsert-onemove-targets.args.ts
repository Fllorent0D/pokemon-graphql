import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsWhereUniqueInput } from '../move-targets/move-targets-where-unique.input';
import { Type } from 'class-transformer';
import { move_targetsCreateInput } from '../move-targets/move-targets-create.input';
import { move_targetsUpdateInput } from '../move-targets/move-targets-update.input';

@ArgsType()
export class UpsertOnemoveTargetsArgs {

    @Field(() => move_targetsWhereUniqueInput, {nullable:false})
    @Type(() => move_targetsWhereUniqueInput)
    where!: move_targetsWhereUniqueInput;

    @Field(() => move_targetsCreateInput, {nullable:false})
    @Type(() => move_targetsCreateInput)
    create!: move_targetsCreateInput;

    @Field(() => move_targetsUpdateInput, {nullable:false})
    @Type(() => move_targetsUpdateInput)
    update!: move_targetsUpdateInput;
}
