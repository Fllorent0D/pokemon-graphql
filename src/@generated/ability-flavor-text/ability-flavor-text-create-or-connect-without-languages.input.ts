import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from './ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateWithoutLanguagesInput } from './ability-flavor-text-create-without-languages.input';

@InputType()
export class ability_flavor_textCreateOrConnectWithoutLanguagesInput {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_flavor_textCreateWithoutLanguagesInput)
    create!: ability_flavor_textCreateWithoutLanguagesInput;
}
