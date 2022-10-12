import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_proseUpdateWithoutLanguagesInput } from './location-area-prose-update-without-languages.input';

@InputType()
export class location_area_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;

    @Field(() => location_area_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_area_proseUpdateWithoutLanguagesInput)
    data!: location_area_proseUpdateWithoutLanguagesInput;
}
