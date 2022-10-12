import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseWhereInput } from '../move-target-prose/move-target-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveTargetProseArgs {

    @Field(() => move_target_proseWhereInput, {nullable:true})
    @Type(() => move_target_proseWhereInput)
    where?: move_target_proseWhereInput;
}
