import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseWhereInput } from '../move-damage-class-prose/move-damage-class-prose-where.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseOrderByWithRelationInput } from '../move-damage-class-prose/move-damage-class-prose-order-by-with-relation.input';
import { move_damage_class_proseWhereUniqueInput } from '../move-damage-class-prose/move-damage-class-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_damage_class_proseScalarFieldEnum } from './move-damage-class-prose-scalar-field.enum';

@ArgsType()
export class FindFirstmoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    @Type(() => move_damage_class_proseWhereInput)
    where?: move_damage_class_proseWhereInput;

    @Field(() => [move_damage_class_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_damage_class_proseOrderByWithRelationInput>;

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:true})
    cursor?: move_damage_class_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_damage_class_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_damage_class_proseScalarFieldEnum>;
}
