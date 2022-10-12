import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsCreateInput } from '../move-targets/move-targets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveTargetsArgs {

    @Field(() => move_targetsCreateInput, {nullable:false})
    @Type(() => move_targetsCreateInput)
    data!: move_targetsCreateInput;
}
