import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseCreateWithoutLanguagesInput } from './location-area-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { location_area_proseCreateOrConnectWithoutLanguagesInput } from './location-area-prose-create-or-connect-without-languages.input';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';

@InputType()
export class location_area_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [location_area_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseCreateWithoutLanguagesInput)
    create?: Array<location_area_proseCreateWithoutLanguagesInput>;

    @Field(() => [location_area_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => location_area_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<location_area_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [location_area_proseWhereUniqueInput], {nullable:true})
    @Type(() => location_area_proseWhereUniqueInput)
    connect?: Array<location_area_proseWhereUniqueInput>;
}
