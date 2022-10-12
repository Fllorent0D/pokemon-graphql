import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textUpdateWithoutLanguagesInput } from './ability-flavor-text-update-without-languages.input';
import { ability_flavor_textCreateWithoutLanguagesInput } from './ability-flavor-text-create-without-languages.input';

@InputType()
export class ability_flavor_textUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateWithoutLanguagesInput)
    update!: ability_flavor_textUpdateWithoutLanguagesInput;

    @Field(() => ability_flavor_textCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_flavor_textCreateWithoutLanguagesInput)
    create!: ability_flavor_textCreateWithoutLanguagesInput;
}
