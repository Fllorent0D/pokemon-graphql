import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { berry_flavorsUpdateWithoutBerriesInput } from './berry-flavors-update-without-berries.input';
import { berry_flavorsCreateWithoutBerriesInput } from './berry-flavors-create-without-berries.input';

@InputType()
export class berry_flavorsUpsertWithWhereUniqueWithoutBerriesInput {

    @Field(() => berry_flavorsWhereUniqueInput, {nullable:false})
    @Type(() => berry_flavorsWhereUniqueInput)
    where!: berry_flavorsWhereUniqueInput;

    @Field(() => berry_flavorsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_flavorsUpdateWithoutBerriesInput)
    update!: berry_flavorsUpdateWithoutBerriesInput;

    @Field(() => berry_flavorsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_flavorsCreateWithoutBerriesInput)
    create!: berry_flavorsCreateWithoutBerriesInput;
}
