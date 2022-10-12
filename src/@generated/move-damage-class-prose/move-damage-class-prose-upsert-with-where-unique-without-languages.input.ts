import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseUpdateWithoutLanguagesInput } from './move-damage-class-prose-update-without-languages.input';
import { move_damage_class_proseCreateWithoutLanguagesInput } from './move-damage-class-prose-create-without-languages.input';

@InputType()
export class move_damage_class_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    where!: move_damage_class_proseWhereUniqueInput;

    @Field(() => move_damage_class_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateWithoutLanguagesInput)
    update!: move_damage_class_proseUpdateWithoutLanguagesInput;

    @Field(() => move_damage_class_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_damage_class_proseCreateWithoutLanguagesInput)
    create!: move_damage_class_proseCreateWithoutLanguagesInput;
}
