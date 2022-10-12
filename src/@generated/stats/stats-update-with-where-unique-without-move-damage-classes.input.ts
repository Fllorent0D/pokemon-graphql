import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsUpdateWithoutMove_damage_classesInput } from './stats-update-without-move-damage-classes.input';

@InputType()
export class statsUpdateWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => statsUpdateWithoutMove_damage_classesInput)
    data!: statsUpdateWithoutMove_damage_classesInput;
}
