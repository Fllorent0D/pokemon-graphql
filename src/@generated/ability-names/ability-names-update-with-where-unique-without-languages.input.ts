import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';
import { Type } from 'class-transformer';
import { ability_namesUpdateWithoutLanguagesInput } from './ability-names-update-without-languages.input';

@InputType()
export class ability_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => ability_namesWhereUniqueInput, {nullable:false})
    @Type(() => ability_namesWhereUniqueInput)
    where!: ability_namesWhereUniqueInput;

    @Field(() => ability_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => ability_namesUpdateWithoutLanguagesInput)
    data!: ability_namesUpdateWithoutLanguagesInput;
}
