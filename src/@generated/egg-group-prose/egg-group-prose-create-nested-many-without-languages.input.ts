import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseCreateWithoutLanguagesInput } from './egg-group-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { egg_group_proseCreateOrConnectWithoutLanguagesInput } from './egg-group-prose-create-or-connect-without-languages.input';
import { egg_group_proseWhereUniqueInput } from './egg-group-prose-where-unique.input';

@InputType()
export class egg_group_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [egg_group_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseCreateWithoutLanguagesInput)
    create?: Array<egg_group_proseCreateWithoutLanguagesInput>;

    @Field(() => [egg_group_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => egg_group_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<egg_group_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [egg_group_proseWhereUniqueInput], {nullable:true})
    @Type(() => egg_group_proseWhereUniqueInput)
    connect?: Array<egg_group_proseWhereUniqueInput>;
}
