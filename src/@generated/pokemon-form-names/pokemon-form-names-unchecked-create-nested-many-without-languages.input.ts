import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesCreateWithoutLanguagesInput } from './pokemon-form-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateOrConnectWithoutLanguagesInput } from './pokemon-form-names-create-or-connect-without-languages.input';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';

@InputType()
export class pokemon_form_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokemon_form_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateWithoutLanguagesInput)
    create?: Array<pokemon_form_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokemon_form_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    connect?: Array<pokemon_form_namesWhereUniqueInput>;
}
