import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesUpdateWithoutLanguagesInput } from './location-names-update-without-languages.input';

@InputType()
export class location_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_namesUpdateWithoutLanguagesInput)
    data!: location_namesUpdateWithoutLanguagesInput;
}
