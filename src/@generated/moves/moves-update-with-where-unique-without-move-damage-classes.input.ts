import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_damage_classesInput } from './moves-update-without-move-damage-classes.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => movesUpdateWithoutMove_damage_classesInput)
    data!: movesUpdateWithoutMove_damage_classesInput;
}
