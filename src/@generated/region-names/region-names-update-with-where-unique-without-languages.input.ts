import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';
import { Type } from 'class-transformer';
import { region_namesUpdateWithoutLanguagesInput } from './region-names-update-without-languages.input';

@InputType()
export class region_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;

    @Field(() => region_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => region_namesUpdateWithoutLanguagesInput)
    data!: region_namesUpdateWithoutLanguagesInput;
}
