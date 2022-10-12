import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_battle_styles } from '../move-battle-styles/move-battle-styles.model';

@ObjectType()
export class move_battle_style_prose {

    @Field(() => Int, {nullable:false})
    move_battle_style_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_battle_styles, {nullable:false})
    move_battle_styles?: move_battle_styles;
}
