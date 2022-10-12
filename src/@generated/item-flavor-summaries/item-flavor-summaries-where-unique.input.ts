import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesItem_idLocal_language_idCompoundUniqueInput } from './item-flavor-summaries-item-id-local-language-id-compound-unique.input';

@InputType()
export class item_flavor_summariesWhereUniqueInput {

    @Field(() => item_flavor_summariesItem_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_id_local_language_id?: item_flavor_summariesItem_idLocal_language_idCompoundUniqueInput;
}
