import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_proseUpdateWithoutLanguagesInput } from './location-area-prose-update-without-languages.input';
import { location_area_proseCreateWithoutLanguagesInput } from './location-area-prose-create-without-languages.input';

@InputType()
export class location_area_proseUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;

    @Field(() => location_area_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_area_proseUpdateWithoutLanguagesInput)
    update!: location_area_proseUpdateWithoutLanguagesInput;

    @Field(() => location_area_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_area_proseCreateWithoutLanguagesInput)
    create!: location_area_proseCreateWithoutLanguagesInput;
}
