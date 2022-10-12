import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { berry_flavorsUpdateWithoutBerriesInput } from './berry-flavors-update-without-berries.input';

@InputType()
export class berry_flavorsUpdateWithWhereUniqueWithoutBerriesInput {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;

    @Field(() => berry_flavorsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_flavorsUpdateWithoutBerriesInput)
    data!: berry_flavorsUpdateWithoutBerriesInput;
}
