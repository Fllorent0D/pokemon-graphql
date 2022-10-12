import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsWhereUniqueInput } from '../move-targets/move-targets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveTargetsArgs {

    @Field(() => move_targetsWhereUniqueInput, {nullable:false})
    @Type(() => move_targetsWhereUniqueInput)
    where!: move_targetsWhereUniqueInput;
}
