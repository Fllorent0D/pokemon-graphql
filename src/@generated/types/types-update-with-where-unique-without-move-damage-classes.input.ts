import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesUpdateWithoutMove_damage_classesInput } from './types-update-without-move-damage-classes.input';

@InputType()
export class typesUpdateWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => typesUpdateWithoutMove_damage_classesInput)
    data!: typesUpdateWithoutMove_damage_classesInput;
}
