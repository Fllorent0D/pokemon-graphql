import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateWithoutLanguagesInput } from './location-area-prose-create-without-languages.input';

@InputType()
export class location_area_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;

    @Field(() => location_area_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => location_area_proseCreateWithoutLanguagesInput)
    create!: location_area_proseCreateWithoutLanguagesInput;
}
