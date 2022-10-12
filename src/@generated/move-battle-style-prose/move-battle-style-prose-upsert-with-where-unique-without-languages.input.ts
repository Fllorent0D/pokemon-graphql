import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseUpdateWithoutLanguagesInput } from './move-battle-style-prose-update-without-languages.input';
import { move_battle_style_proseCreateWithoutLanguagesInput } from './move-battle-style-prose-create-without-languages.input';

@InputType()
export class move_battle_style_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    where!: move_battle_style_proseWhereUniqueInput;

    @Field(() => move_battle_style_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateWithoutLanguagesInput)
    update!: move_battle_style_proseUpdateWithoutLanguagesInput;

    @Field(() => move_battle_style_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_battle_style_proseCreateWithoutLanguagesInput)
    create!: move_battle_style_proseCreateWithoutLanguagesInput;
}
