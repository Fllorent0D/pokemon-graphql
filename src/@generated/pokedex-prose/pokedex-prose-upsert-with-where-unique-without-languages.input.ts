import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokedex_proseUpdateWithoutLanguagesInput } from './pokedex-prose-update-without-languages.input';
import { pokedex_proseCreateWithoutLanguagesInput } from './pokedex-prose-create-without-languages.input';

@InputType()
export class pokedex_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokedex_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokedex_proseWhereUniqueInput)
    where!: pokedex_proseWhereUniqueInput;

    @Field(() => pokedex_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokedex_proseUpdateWithoutLanguagesInput)
    update!: pokedex_proseUpdateWithoutLanguagesInput;

    @Field(() => pokedex_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokedex_proseCreateWithoutLanguagesInput)
    create!: pokedex_proseCreateWithoutLanguagesInput;
}
