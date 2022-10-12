import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesCreateWithoutLanguagesInput } from './pokemon-color-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-color-names-create-or-connect-without-languages.input';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';

@InputType()
export class pokemon_color_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_color_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_color_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_color_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_color_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_color_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    connect?: Array<pokemon_color_namesWhereUniqueInput>;
}
