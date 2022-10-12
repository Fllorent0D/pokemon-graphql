import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsWhereInput } from '../move-targets/move-targets-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveTargetsArgs {

    @Field(() => move_targetsWhereInput, {nullable:true})
    @Type(() => move_targetsWhereInput)
    where?: move_targetsWhereInput;
}
