import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseWhereInput } from '../move-damage-class-prose/move-damage-class-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    @Type(() => move_damage_class_proseWhereInput)
    where?: move_damage_class_proseWhereInput;
}
